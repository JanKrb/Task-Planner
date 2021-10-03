import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import { ZiggyVue } from 'ziggy';
import { Ziggy } from './ziggy';
import { createI18n } from 'vue-i18n'
import translations from './i18n'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: translations
})

InertiaProgress.init()

createInertiaApp({
    resolve: name => require(`./components/pages/${name}`),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(i18n)
            .mount(el)
    },
})
