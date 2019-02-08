

const NotBugDemo = import(/* webpackChunkName: "not-bug-demo" */ './not-bug-demo')

const loadable = loader => loader('bug-demo')

const BugDemo = loadable(() => import(/* webpackChunkName: "bug-demo" */ './bug-demo'))
