export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },

  auth: {
    register: {
      path: '/auth/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    login: {
      path: '/auth/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },

  user: {
    root: {
      path: '/dashboard',
      getHref: () => '/dashboard',
    },
    dashboard: {
      path: '',
      getHref: () => '/dashboard',
    },
    profile: {
      path: 'profile',
      getHref: () => '/dashboard/profile',
    },
  },

  all: {
    path: '*',
  },
} as const;
