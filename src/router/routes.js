const router = [
  {
    path: '/',
    component: () => lazyLoadView(import('../components/HelloWorld.vue')),
  },
  {
    path: '/markdown',
    component: () => lazyLoadView(import('../components/Markdown.vue')),
  },
  {
    path: '/ellipsis',
    component: () => lazyLoadView(import('../components/Ellipsis.vue')),
  },
  {
    path: '/webp',
    component: () => lazyLoadView(import('../components/Webp.vue')),
  },
  {
    path: '*',
    redirect: '404',
  },
]

function removeUnusedRouter(r) {
  if (!r) {
    return
  }
  for (let i = r.length - 1; i >= 0; i--) {
    if (!r[i]) {
      r.splice(i, 1)
    } else {
      removeUnusedRouter(r[i].children)
    }
  }
}

removeUnusedRouter(router)

//console.log('router is', router)

export default router

// Lazy-loads view components, but with better UX. A loading view
// will be used if the component takes a while to load, falling
// back to a timeout view in case the page fails to load. You can
// use this component to lazy-load a route with:
//
// component: () => lazyLoadView(import('@views/my-view'))
//
// NOTE: Components loaded with this strategy DO NOT have access
// to in-component guards, such as beforeRouteEnter,
// beforeRouteUpdate, and beforeRouteLeave. You must either use
// route-level guards instead or lazy-load the component directly:
//
// component: () => import('@views/my-view')
//
function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    // loading: require('@views/_loading').default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 400,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    // error: require('@views/_timeout').default,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000,
  })

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children)
    },
  })
}
