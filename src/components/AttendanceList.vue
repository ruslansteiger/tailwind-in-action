<template>
	<div class="p-4">
		<div>
			<div
				v-for="attendance in attendances"
				:key="attendance.member.id"
				class="relative flex items-center justify-between p-5 bg-white rounded shadow"
			>
				<div>
					<div>
						<span>{{ attendance.member.name }}</span>

						<time class="ml-4 text-xs text-gray-600">
							{{ rsvpUpdated(attendance.rsvp.updated) }}
						</time>
					</div>

					<a
						class="inline-flex items-center mt-2 btn btn-primary"
						:href="profileLink(attendance.member)"
						target="_blank"
					>
						Profile
						<svg
							class="w-5 h-5 ml-2"
							fill="currentColor"
							viewBox="0 0 511.626 511.627"
						>
							<path
								d="M392.857 292.354h-18.274c-2.669 0-4.859.855-6.563 2.573-1.718 1.708-2.573 3.897-2.573 6.563v91.361c0 12.563-4.47 23.315-13.415 32.262-8.945 8.945-19.701 13.414-32.264 13.414H82.224c-12.562 0-23.317-4.469-32.264-13.414-8.945-8.946-13.417-19.698-13.417-32.262V155.31c0-12.562 4.471-23.313 13.417-32.259 8.947-8.947 19.702-13.418 32.264-13.418h200.994c2.669 0 4.859-.859 6.57-2.57 1.711-1.713 2.566-3.9 2.566-6.567V82.221c0-2.662-.855-4.853-2.566-6.563-1.711-1.713-3.901-2.568-6.57-2.568H82.224c-22.648 0-42.016 8.042-58.102 24.125C8.042 113.297 0 132.665 0 155.313v237.542c0 22.647 8.042 42.018 24.123 58.095 16.086 16.084 35.454 24.13 58.102 24.13h237.543c22.647 0 42.017-8.046 58.101-24.13 16.085-16.077 24.127-35.447 24.127-58.095v-91.358c0-2.669-.856-4.859-2.574-6.57-1.713-1.718-3.903-2.573-6.565-2.573z"
							/>
							<path
								d="M506.199 41.971c-3.617-3.617-7.905-5.424-12.85-5.424H347.171c-4.948 0-9.233 1.807-12.847 5.424-3.617 3.615-5.428 7.898-5.428 12.847s1.811 9.233 5.428 12.85l50.247 50.248-186.147 186.151c-1.906 1.903-2.856 4.093-2.856 6.563 0 2.479.953 4.668 2.856 6.571l32.548 32.544c1.903 1.903 4.093 2.852 6.567 2.852s4.665-.948 6.567-2.852l186.148-186.148 50.251 50.248c3.614 3.617 7.898 5.426 12.847 5.426s9.233-1.809 12.851-5.426c3.617-3.616 5.424-7.898 5.424-12.847V54.818c-.001-4.952-1.814-9.232-5.428-12.847z"
							/>
						</svg>
					</a>
				</div>

				<div>
					<img
						class="object-cover w-12 h-12 border border-green-700 rounded-full transform hover:rotate-360 hover:scale-150 duration-300"
						:src="imageSource(attendance.member.photo)"
						alt="Profile photo"
					/>

					<!-- <div
						v-if="attendance.member.role"
						:title="attendance.member.role"
					>
						<div v-if="attendance.member.role === 'organizer'">👑</div>
						<div v-else>👒</div>
					</div> -->
				</div>

				<!-- <button
					class="absolute top-0 right-0 p-1 text-gray-400 hover:text-red-500 transition-colors duration-300"
					@click="remove(attendance)"
				>
					<svg
						class="w-4 h-4 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path
							d="M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"
						/>
						<path
							d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"
						/>
					</svg>
				</button> -->
			</div>
		</div>

		<!-- <div class="flex justify-center pb-20 mt-4">
			<button @click="add" class="flex items-center p-4">
				<img class="w-8" src="/vue-basel-logo.svg" alt="Vue Basel Logo" />
				Add new attendance
				<img class="w-8" src="/vue-basel-logo.svg" alt="Vue Basel Logo" />
			</button>
		</div> -->
	</div>
</template>

<script>
import { ref } from 'vue'

import utils from '../utils'

export default {
	props: {
		initialAttendances: Array,
	},

	setup(props) {
		const attendances = ref(props.initialAttendances)

		function imageSource(photo) {
			if (photo) {
				return photo.photo_link
			}

			return '/vue-basel-logo.svg'
		}

		function remove(attendance) {
			attendances.value = attendances.value.filter(
				a => a.member.id !== attendance.member.id,
			)
		}

		function add() {
			attendances.value.push({
				member: {
					id: Math.floor(Math.random() * 100000000),
					name: 'Vue Basel 🤘',
					event_context: { host: false },
				},
				rsvp: {
					updated: 1578233218000,
				},
			})
		}

		return { attendances, remove, add, imageSource, ...utils }
	},
}
</script>
