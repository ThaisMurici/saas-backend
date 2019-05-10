'use strict'

const User = use('App/Models/User')

const InviteHook = (exports = module.exports = {})

InviteHook.sendInvitationEmail = async invite => {
  const { email } = invite
  const alreadyInvited = await User.findBy('email', email)

  if (alreadyInvited) {
    await alreadyInvited.teams().attach(invite.team_id)
  } else {
    console.log('CRIAR CONTA')
    // Send e-mail
  }
}
