import React from "react"
function MainContent () {
    const date = new Date(2021,1,14,15)
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: "20px",
        fontWeight: "bold"
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#2E0927"
    } else {
        timeOfDay = "night"
        styles.color = "#D90000"
    }

    return (
        <main>
            <p style={styles}>Good {timeOfDay}!</p>
        </main>
    )
}
export default MainContent