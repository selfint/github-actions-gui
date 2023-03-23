export type Action = {
    name?: string,
    "run-name"?: string,
    on: keyof On | (keyof On)[] | On,
    permissions?: Permissions,
    env?: Record<string, string | number | undefined>,
    defaults?: {
        [key: string]: unknown
        run?: {
            shell?: string,
            "working-directory"?: string,
        },
    },
    concurrency?: string | {
        group: string,
        "cancel-in-progress": boolean
    },
    jobs: Record<string, Job>,
}

export type Job = {
    name: string
}

export type On = {
    issues?: ActivityConfig,
    label?: ActivityConfig,
    page_build?: null,
    pull_request?: EventConfig
    push?: EventConfig,
    schedule?: { cron: string[] },
    workflow_call?: { inputs?: Record<string, object>, outputs?: Record<string, object>, secrets?: Record<string, object>, },
    workflow_dispath?: { inputs?: Record<string, object> },
    workflow_run?: { workflows: string[], types: string[], } & EventConfig,
}

export type ActivityConfig = {
    types: string[]
}

export type EventConfig = {
    branches: string[],
    "branches-ignore": string[]
    tags: string[],
    "tags-ignore": string[]
    paths: string[],
    "paths-ignore": string[]
}

export type Permissions = {
    actions?: "read" | "write" | "none",
    checks?: "read" | "write" | "none",
    contents?: "read" | "write" | "none",
    deployments?: "read" | "write" | "none",
    "id-token"?: "read" | "write" | "none",
    issues?: "read" | "write" | "none",
    discussions?: "read" | "write" | "none",
    packages?: "read" | "write" | "none",
    pages?: "read" | "write" | "none",
    "pull-requests"?: "read" | "write" | "none",
    "repository-projects"?: "read" | "write" | "none",
    "security-events"?: "read" | "write" | "none",
    statuses?: "read" | "write" | "none",
} | "read-all" | "write-all" | null;