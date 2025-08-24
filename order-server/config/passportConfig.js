import passport from "passport"
import { Strategy as LocalStrategy, Strategy } from "passport-local"
import Record from "../models/record.js";
import bcrypt from "bcryptjs";

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        console.log('in passport use')
        const user = await Record.findOne({ username: username })
        if (!user) {
            return done(null, false, { message: "User not found" });
        }
        const isMatch = await bcrypt.compare( password, user.password)
        if (!isMatch) {
            return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
    } catch (error) {
        return done(error);
    }
}
));

passport.serializeUser((user, done) => {
    console.log('in serializeUser', user)
    done(null, user.uuid)
});

passport.deserializeUser(async(_id, done) => {
    try{
        console.log('in deserializeUser', uuid)
        const user = await User.findById(uuid);
        done(null, user);
    } catch (error) {
        done(error);
    }
});

