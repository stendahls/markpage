module.exports = function rawReplace( search, replace, subject ) {
    const before = subject.substring( 0, subject.indexOf( search ) );
    if ( !before ) {
        return subject;
    }

    const after = subject.substring( subject.indexOf( search ) + search.length );

    return `${ before }${ replace }${ after }`;
};
