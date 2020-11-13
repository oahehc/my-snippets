const _openURL = (url) => {
  if (url) window.open(url);
};

const gFbOg = () => $('meta[property="og:image"]')?.content;
const gTwOg = () => $('meta[name="twitter:image"]')?.content;
const oFbOg = () => _openURL(gFbOg());
const oTwOg = () => _openURL(gTwOg());

(function () {
  if (!window) return;

  window.oe = {
    gFbOg,
    gTwOg,
    oFbOg,
    oTwOg,
  };
})();
