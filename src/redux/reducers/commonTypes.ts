type PatientsType = {
  record: string
}
type AppType = {
  time: Date
  patients: Array<PatientsType>
  maxNumberPatients: number
}
export type AppointmentsType = {
  date: Date
  appointments: Array<AppType>
  numberAllPatients: number
}

export type ProfileType = {
  id: any
  photoUrl: string
  firstName: string
  lastName: string
  patronymic: string
  gender: string
  phoneNumber: string
  isActivated: boolean
}

export type RecType = {
  userId: string
  date: Date
  time: Date
  appointmentType: string
  status: string
  modifiedDate: Date
}
// export type finishedRecType = {
//     userId: string,
//     date: Date,
//     time: Date,
//     appointmentType: string,
//     status?: string,
// }
export type RecordsType = {
  upcomingRecords: [RecType]
  finishedRecords: [RecType]
  modifiedNumber: number
}
