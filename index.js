const returnFirstTwoDrivers = (array) => {
  return array.slice(0,2)
}

const returnLastTwoDrivers = (array) => {
  return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => {
  return (value) => {
    return int * value
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, whichDriver) => {
  return whichDriver(drivers)
}