<template>
	<!-- <div class="flex items-center justify-center h-screen"> -->
	<!-- <HelloWorld /> -->

	<!-- <ButtonExample /> -->

	<!-- <CardExample :attendance="bestMeetupOrganizer" /> -->
	<!-- </div> -->

	<AttendanceList :initialAttendances="attendances" />
</template>

<script>
import { computed, ref } from 'vue'

import * as rawData from './attendances.json'
import AttendanceList from './components/AttendanceList.vue'
import ButtonExample from './components/ButtonExample'
import CardExample from './components/CardExample'
import HelloWorld from './components/HelloWorld'

export default {
	components: {
		AttendanceList,
		ButtonExample,
		CardExample,
		HelloWorld,
	},

	setup() {
		const attendances = ref(rawData.default)

		const bestMeetupOrganizer = computed(() => {
			return attendances.value.find(a => a.member.id === 75317902)
		})

		return { attendances, bestMeetupOrganizer }
	},
}
</script>
