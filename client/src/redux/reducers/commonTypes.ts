type patientsType = {
    userId: any,
    appointmentId: string,
    appointmentType: string,
}
type appType = {
    time: Date,
    patients: Array<patientsType>,
    maxNumberPatients: number,
}
export type appointmentsType = {
    date: Date,
    appointments: Array<appType>,
    numberAllPatients: number,
}

export type profileType = {
    id: any,
    photoUrl: string,
    firstName: string,
    lastName: string,
    patronymic: string,
    gender: string,
    phoneNumber: string,
    isActivated: boolean,
}

export type upcomingRecType = {
    appointmentId: string,
    date: Date,
    time: Date,
    appointmentType: string,
}
export type finishedRecType = {
    appointmentId: string,
    date: Date,
    time: Date,
    appointmentType: string,
    status: string,
}
export type recordsType = {
    upcomingRecords: [upcomingRecType],
    finishedRecords: [finishedRecType],
}