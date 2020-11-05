const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = () => {
    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        }, async (email, password, done) => {
            try {
                const user = await User.findOne({
                    where: { email }
                });
                if (!user) {
                    return done(null, false, { reason: '존재하지 않는 않는 사용자입니다.' });//서버에러,성공객체, 클라이언트에러
                }
                const result = await bcrypt.compare(password, user.password);//받은 pw, db의 pw, compare 비동기함수
                if (result) {
                    return done(null, user);
                }
                return done(null, false, { reason: '비밀번호가 일치하지 않습니다' });
            }
            catch (error) {
                console.error(error);
                return done(error);
            }
        }
    ));
};
