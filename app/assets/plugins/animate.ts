import { DirectiveBinding } from 'vue';

interface BindingValue {
    animation?: string;
    duration?: number;
}

interface AnimateClasses {
    baseAnimateClass: string;
    opacityZeroClass: string;
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('animate', {
        mounted(el: HTMLElement, binding: DirectiveBinding<BindingValue>) {
            const { animation = 'animate__fadeInUp', duration = 1000 } = binding.value;
            const obj: AnimateClasses = {
                baseAnimateClass: 'animate__animated',
                opacityZeroClass: 'opacity-0',
            };
            const animationClass = ref<string>('');

            const observer = new IntersectionObserver(
                (entries: IntersectionObserverEntry[]) => {
                    entries.forEach((entry: IntersectionObserverEntry) => {
                        if (entry.isIntersecting) {
                            animationClass.value = animation;
                            el.classList.add(obj.baseAnimateClass, animationClass.value);
                            el.classList.remove(obj.opacityZeroClass);
                            setTimeout(() => {
                                el.classList.remove(animationClass.value);
                                el.classList.remove(obj.baseAnimateClass);
                            }, duration);
                        }
                    });
                },
                { threshold: 0.1 },
            );

            observer.observe(el);

            // Сохраняем observer для последующего отключения
            (el as any)._observer = observer;
        },
        unmounted(el: HTMLElement) {
            // Отключение observer при размонтировании элемента
            if ((el as any)._observer) {
                (el as any)._observer.disconnect();
            }
        },
    });
});