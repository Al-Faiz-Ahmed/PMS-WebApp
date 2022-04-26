export let data = {
   dashboard:false,
   authUser:'qwertyuioppoiuytrewq',
   account:'Google',
   googleAccounts:[],
   fbAccounts:[],
   instaAccounts:[],
   appleAccounts:[],
   githubAccounts:[],
   snapchatAccounts:[],
}

export function reducer(state, action) {
    switch (action.type) {
        case "HIDE_DASHBOARD": {
            return {
                ...state,
                dashboard: false
            }
        }
        case "SHOW_DASHBOARD": {
            return {
                ...state,
                dashboard: true
            }
        }
        case "AUTHENTIC_USER": {
            return {
                ...state,
                authUser:action.payload
            }
        }
        case "UPDATE_PAGE": {
            return {
                ...state,
                account:action.payload
            }
        }
        case "Google": {
            let googleAcc = state.googleAccounts
            googleAcc.push(action.payload)
            return {
                ...state,
                googleAccounts:googleAcc
            }
        }
        case "Facebook": {
            let fbAcc = state.fbAccounts
            fbAcc.push(action.payload)
            return {
                ...state,
                fbAccounts:fbAcc
            }
        }
        case "Instagram": {
            let instaAcc = state.instaAccounts
            instaAcc.push(action.payload)
            return {
                ...state,
                instaAccounts:instaAcc
            }
        }
        case "iCloud": {
            let icloudAcc = state.appleAccounts
            icloudAcc.push(action.payload)
            return {
                ...state,
                appleAccounts:icloudAcc
            }
        }
        case "Github": {
            let githubAcc = state.githubAccounts
            githubAcc.push(action.payload)
            return {
                ...state,
                githubAccounts:githubAcc
            }
        }
        case "Snapchat": {
            let snapchatAcc = state.snapchatAccounts
            snapchatAcc.push(action.payload)
            return {
                ...state,
                snapchatAccounts:snapchatAcc
            }
        }
        default:
            return state;

    }
}