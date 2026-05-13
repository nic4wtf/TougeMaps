package com.tougemaps.app.model

data class GeoPoint(
    val latitude: Double,
    val longitude: Double,
)

data class Track(
    val id: String,
    val name: String,
    val region: String,
    val difficulty: String,
    val rating: Double,
    val distanceKm: Double,
    val lengthKm: Double,
    val elevationGainM: Int,
    val description: String,
    val bestSeason: String,
    val hazards: List<String>,
    val tags: List<String>,
    val startPoint: GeoPoint,
)

data class RunRecord(
    val trackId: String,
    val driverName: String,
    val carName: String,
    val bestTime: String,
    val averageSpeedKph: Int,
    val gnssQuality: String,
    val imuStatus: String,
)

data class DrivePlan(
    val title: String,
    val dateLabel: String,
    val host: String,
    val trackName: String,
    val attendees: Int,
    val capacity: Int,
    val visibility: String,
)

data class CarProfile(
    val name: String,
    val platform: String,
    val notes: String,
)

data class UserProfile(
    val handle: String,
    val displayName: String,
    val bio: String,
    val homeRegion: String,
    val subscribedTracks: List<String>,
    val cars: List<CarProfile>,
    val bestTimes: List<RunRecord>,
)
