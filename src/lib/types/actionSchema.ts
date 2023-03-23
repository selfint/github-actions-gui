export type ActionSchema = {
    description: string,
    inputs: Record<string, {
        default: unknown,
        description: string
        required: boolean
    }>,
    name: string,
    runs: {
        main: string,
        post: string,
        using: string,
    },
}