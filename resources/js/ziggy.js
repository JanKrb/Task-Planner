const Ziggy = {"url":"http:\/\/127.0.0.1","port":null,"defaults":{},"routes":{"auth.render_login":{"uri":"login","methods":["GET","HEAD"]},"auth.render_register":{"uri":"register","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
