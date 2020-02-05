import format from 'date-fns/format'
import fromUnixTime from 'date-fns/fromUnixTime'

function rsvpUpdated(time) {
	let t = parseInt(time.toString().slice(0, -3, time))
	return format(fromUnixTime(t), 'dd.MM.yyyy')
}

function profileLink(member) {
	return `https://www.meetup.com/members/${member.id}`
}

export default { rsvpUpdated, profileLink }
