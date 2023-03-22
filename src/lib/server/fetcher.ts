export type Fetcher = {
    fetch: (url: string) => string | undefined
}