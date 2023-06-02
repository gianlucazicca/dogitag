export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[]

export interface Database {
    public: {
        Tables: {
            dogs: {
                Row: {
                    created_at: string | null
                    dog_owner: string | null
                    dog_profile: Json | null
                    health_pass: Json | null
                    id: number
                    mapped_url: number | null
                    updated_at: string | null
                }
                Insert: {
                    created_at?: string | null
                    dog_owner?: string | null
                    dog_profile?: Json | null
                    health_pass?: Json | null
                    id?: number
                    mapped_url?: number | null
                    updated_at?: string | null
                }
                Update: {
                    created_at?: string | null
                    dog_owner?: string | null
                    dog_profile?: Json | null
                    health_pass?: Json | null
                    id?: number
                    mapped_url?: number | null
                    updated_at?: string | null
                }
            }
            profiles: {
                Row: {
                    avatar_url: string | null
                    created_at: string | null
                    email: string | null
                    first_name: string | null
                    guided: boolean
                    id: string
                    last_name: string | null
                    updated_at: string | null
                }
                Insert: {
                    avatar_url?: string | null
                    created_at?: string | null
                    email?: string | null
                    first_name?: string | null
                    guided?: boolean
                    id: string
                    last_name?: string | null
                    updated_at?: string | null
                }
                Update: {
                    avatar_url?: string | null
                    created_at?: string | null
                    email?: string | null
                    first_name?: string | null
                    guided?: boolean
                    id?: string
                    last_name?: string | null
                    updated_at?: string | null
                }
            }
            qr_urls: {
                Row: {
                    created_at: string | null
                    id: number
                    is_mapped: boolean
                }
                Insert: {
                    created_at?: string | null
                    id?: number
                    is_mapped?: boolean
                }
                Update: {
                    created_at?: string | null
                    id?: number
                    is_mapped?: boolean
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
