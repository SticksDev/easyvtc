import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
    const supakey = process.env.supakey ? process.env.supakey : 'nokeyfound';
    const supabase = createClient('https://iutoeoujqhpmcnenisep.supabase.co', supakey)

    const body = req.body;

    const { data, error } = await supabase
    .from('waitlist')
    .insert([
        {
            FirstName: body.first_name,
            LastName: body.last_name,
            discordId: body.discordId,
            discordUser: body.discordTag,
            emailAddress: body.email,
            wouldTest: body.testCheckBox,
            emailNotifications: body.emailCheckBox
        }
    ])

    if (error) {
        res.status(500).json({
            error: error
        })
    } else if (!error) {
        res.status(200).json({
            message: 'Successfully added to waitlist'
        })
    }
}