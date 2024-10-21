'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod'

const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string().min(10)
})

export function ContactForm(){
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{

        }
    })
    function onSubmit(values: z.infer<typeof formSchema>){
        console.log(values)
    }

    return (
        <>

        </>
    )
}