<template>
	<div class="flex items-center w-64 p-5 bg-white rounded shadow">
		<div>
			<span>{{ attendance.member.name }}</span>

			<time class="ml-4 text-xs text-gray-600">
				{{ rsvpUpdated(attendance.rsvp.updated) }}
			</time>

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

		<img
			class="w-12 h-12 border border-green-700 rounded-full transform hover:rotate-360 hover:scale-150 transition duration-300 ease-out"
			:src="attendance.member.photo.photo_link"
			alt="Profile photo"
		/>
	</div>
</template>

<script>
import utilts from '../utils'

export default {
	props: {
		attendance: Object,
	},

	setup() {
		return { ...utilts }
	},
}
</script>
