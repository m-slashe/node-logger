module.exports = () => {

    const {createLogger, format, transports} = require('winston');
    const {combine, printf} = format;

    const myFormat = printf(info => {
        return `${info.timestamp} [${info.level}]: ${info.message}`;
    });

    return createLogger({
        format: combine(
            format.colorize({all: true}),
            format.timestamp({
                format: 'HH:mm:ss DD/MM/YYYY'
            }),
            myFormat
        ),
        transports: [new transports.Console()]
    });
};