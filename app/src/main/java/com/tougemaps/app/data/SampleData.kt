package com.tougemaps.app.data

import com.tougemaps.app.model.CarProfile
import com.tougemaps.app.model.DrivePlan
import com.tougemaps.app.model.GeoPoint
import com.tougemaps.app.model.RunRecord
import com.tougemaps.app.model.Track
import com.tougemaps.app.model.UserProfile

object SampleData {
    val tracks = listOf(
        Track(
            id = "akina-pass",
            name = "Akina Pass",
            region = "Gunma-style mountain route",
            difficulty = "Technical",
            rating = 4.8,
            distanceKm = 12.4,
            lengthKm = 8.7,
            elevationGainM = 620,
            description = "Fast linked corners with a cold early-morning surface and narrow shoulders.",
            bestSeason = "Autumn dawn runs",
            hazards = listOf("Fog", "Tourist traffic", "Uneven camber"),
            tags = listOf("Downhill", "Hairpins", "Scenic"),
            startPoint = GeoPoint(-33.812, 151.145),
        ),
        Track(
            id = "hakone-loop",
            name = "Hakone Loop",
            region = "Volcanic ridge route",
            difficulty = "Flowing",
            rating = 4.6,
            distanceKm = 18.1,
            lengthKm = 11.3,
            elevationGainM = 540,
            description = "Long sweepers, dramatic ridgeline views, and enough variation for great segment battles.",
            bestSeason = "Cool dry nights",
            hazards = listOf("Crosswinds", "Cyclists", "Late braking zones"),
            tags = listOf("Uphill", "Cruise", "Group drive"),
            startPoint = GeoPoint(-33.859, 151.209),
        ),
        Track(
            id = "tsubaki-line",
            name = "Tsubaki Line",
            region = "Forest switchback section",
            difficulty = "Demanding",
            rating = 4.9,
            distanceKm = 24.0,
            lengthKm = 13.2,
            elevationGainM = 780,
            description = "A denser, more serious route where braking discipline and line choice really matter.",
            bestSeason = "Late spring mornings",
            hazards = listOf("Leaf litter", "Tight exits", "Blind crests"),
            tags = listOf("Switchbacks", "Grip test", "Advanced"),
            startPoint = GeoPoint(-33.873, 151.225),
        ),
    )

    val leaderboard = listOf(
        RunRecord(
            trackId = "akina-pass",
            driverName = "Nico",
            carName = "GR86",
            bestTime = "06:12.48",
            averageSpeedKph = 84,
            gnssQuality = "RTK assisted",
            imuStatus = "Stable",
        ),
        RunRecord(
            trackId = "hakone-loop",
            driverName = "Rin",
            carName = "MX-5 ND",
            bestTime = "07:41.09",
            averageSpeedKph = 79,
            gnssQuality = "Dual-frequency lock",
            imuStatus = "Stable",
        ),
        RunRecord(
            trackId = "tsubaki-line",
            driverName = "Marco",
            carName = "Evo IX",
            bestTime = "08:23.75",
            averageSpeedKph = 88,
            gnssQuality = "Open sky",
            imuStatus = "Minor drift",
        ),
    )

    val drivePlans = listOf(
        DrivePlan(
            title = "Sunrise downhill session",
            dateLabel = "Sat 7:00 AM",
            host = "Nico",
            trackName = "Akina Pass",
            attendees = 6,
            capacity = 10,
            visibility = "Friends",
        ),
        DrivePlan(
            title = "Sunday pace notes run",
            dateLabel = "Sun 9:30 AM",
            host = "Rin",
            trackName = "Tsubaki Line",
            attendees = 4,
            capacity = 6,
            visibility = "Club",
        ),
    )

    val profile = UserProfile(
        handle = "@nicol",
        displayName = "Nicol",
        bio = "Weekend touge addict chasing smoother lines, cleaner telemetry, and better sunrise coffee stops.",
        homeRegion = "Sydney",
        subscribedTracks = tracks.map { it.name },
        cars = listOf(
            CarProfile(
                name = "Toyota GR86",
                platform = "ZN8",
                notes = "Street-first setup, mild alignment, sticky 200tw tires.",
            ),
            CarProfile(
                name = "Suzuki Swift Sport",
                platform = "ZC33S",
                notes = "Lightweight backup car for tighter roads and wet-weather fun.",
            ),
        ),
        bestTimes = leaderboard,
    )
}
