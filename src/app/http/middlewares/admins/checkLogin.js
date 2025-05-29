function checkLogin(req, res, next) {
    // Check session user
    if (!req.session || !req.session.user) {
        console.log('User not logged in, redirecting to login page.');
        return res.redirect('/admin/login');
    } else {
        console.log('User is logged in, proceeding with the request.');
        next();
    }
}

export default checkLogin;
