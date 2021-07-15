import singleSpaHtml from 'single-spa-html';

const lifecycles = singleSpaHtml({
  template: '<div></div>',
});

export const { bootstrap, unmount } = lifecycles;

export const mount = async () => {
  window.location.href = 'http://stackoverflow.com';
};
