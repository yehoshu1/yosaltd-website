'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string().min(10)
})

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className='flex-grow h-full'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 p-10 border border-blue-600 rounded-md">
                    <h1 className='text-xl font-semibold my-2 '>Send us and Inquiry</h1>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder='Enter Your Full Name' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        } />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder='Enter Your Email' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        } />
                        
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder='Enter your message or enquiry here' rows={6} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        } />
                        <Button type="submit" className='my-3'>Submit</Button>

                </form>
            </Form>
        </div>
    )
}