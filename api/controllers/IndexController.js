/**
 * IndexController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  homeView: function (req, res) {
    res.view('dashboard/home/index', {
      layout: 'dashboard/layouts/master',
      title: "mp_023",
    });
  },

};
