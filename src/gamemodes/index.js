module.exports = {
    Mode: require('./Mode'),
    FFA: require('./FFA'),
    Teams: require('./Teams'),
    Experimental: require('./Experimental'),
    Tournament: require('./Tournament'),
    HungerGames: require('./HungerGames'),
    HungerGamesCustom: require('./HungerGamesCustom'),
    HideAndSeek: require('./HideAndSeek'),
	Rainbow: require('./Rainbow'),
    FFACustom: require('./FFACustom'),
};

var get = function(id) {
    var mode;
    switch (id) {
        case 1: // Teams
            mode = new module.exports.Teams();
            break;
        case 2: // Experimental
            mode = new module.exports.Experimental();
            break;
        case 10: // Tournament
            mode = new module.exports.Tournament();
            break;
        case 11: // Hunger Games
            mode = new module.exports.HungerGames();
            break;
        case 12: // Hunger Games Custom
            mode = new module.exports.HungerGamesCustom();
            break;
		case 20: // Rainbow
            mode = new module.exports.Rainbow();
            break;
        case 21: // FFACustom
            mode = new module.exports.FFACustom();
            break;
        case 30: // Hide and Seek
            mode = new module.exports.HideAndSeek();
            break;
        default: // FFA is default
            mode = new module.exports.FFA();
            break;
    }
    return mode;
};

module.exports.get = get;

