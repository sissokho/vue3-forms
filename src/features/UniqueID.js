let UUID = 0

export default function UniqueID() {
  function getID() {
    UUID++

    return UUID
  }

  return {
    getID
  }
}
