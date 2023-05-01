export const PORT = 3000;

export const USER_SECRET = 'USER_SECRET';

export const sessionOptions = {
    key: 'token',
    secret: USER_SECRET,
    resave: false,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        httpOnly:true,
        maxAge: 15 * 60 * 1000,
    },
};

export const corsOptions = {
    origin: [`https://localhost:${PORT}/`, 'https://studio.apollographql.com'],
    credentials: true
}