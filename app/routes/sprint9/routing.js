module.exports = function (router) {

  // CHANGE ME TO THE VERSION YOURE WORKING ON
  var version = 'sprint9/';
  var contact = 'contact-an-adviser/';

  router.post(version + contact + 'select-option', function (req, res) {
    req.session.option = req.body.whyContactUs;
    if (req.session.option == "adviser") {
      res.redirect(301, version + contact + 'contact-an-adviser');
    }
    if (req.session.option == "technical") {
      res.redirect(301, version + contact + 'technical');
    }
    if (req.session.option.why == "feedback") {
      res.redirect(301, version + contact + 'feedback');
    }
  });

  router.post(version + contact + 'contact-an-adviser', function (req, res) {
    res.redirect(301, version + contact + 'your-details-adviser');
  });

  router.post(version + contact + 'technical', function (req, res) {
    res.redirect(301, version + contact + 'your-details');
  });

  router.post(version + contact + 'feedback', function (req, res) {
    res.redirect(301, version + contact + 'your-details');
  });

  router.post(version + contact + 'your-details', function (req, res) {
    res.redirect(301, version + contact + 'thanks-feedback');
  });

  router.post(version + contact + 'your-details-adviser', function (req, res) {
    res.redirect(301, version + contact + 'thanks-adviser');
  });

};