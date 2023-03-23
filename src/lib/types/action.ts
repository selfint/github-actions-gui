export type ActionInput<T> = {
    default: T,
    description: string
    required: boolean
};

export type Action = {
    description: string,
    inputs: Record<string, ActionInput<unknown>>,
    name: string,
    runs: {
        main: string,
        post: string,
        using: string,
    },
}