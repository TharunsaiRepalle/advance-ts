interface Config {
    readonly endpoint : string;
    readonly apikey : string
}

const config: Readonly<Config> = {
    endpoint: 'https://api.com',
    apikey:'werfgh1333f'
}

// if you try to modifiy config ts will throw error.
//config.apikey = "dkddk"