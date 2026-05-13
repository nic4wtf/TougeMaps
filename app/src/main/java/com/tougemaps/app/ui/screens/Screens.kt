@file:OptIn(ExperimentalLayoutApi::class)

package com.tougemaps.app.ui.screens

import androidx.compose.foundation.ExperimentalLayoutApi
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.MyLocation
import androidx.compose.material.icons.rounded.PlayArrow
import androidx.compose.material.icons.rounded.Sensors
import androidx.compose.material3.AssistChip
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.Icon
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.tougemaps.app.model.DrivePlan
import com.tougemaps.app.model.RunRecord
import com.tougemaps.app.model.Track
import com.tougemaps.app.model.UserProfile

@Composable
fun TracksScreen(
    innerPadding: PaddingValues,
    tracks: List<Track>,
    leaderboard: List<RunRecord>,
) {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(innerPadding)
            .padding(horizontal = 16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
        contentPadding = PaddingValues(vertical = 20.dp),
    ) {
        item {
            SectionHeader(
                title = "Touge near me",
                subtitle = "Browse roads, check conditions, and compare local bests.",
            )
        }
        item {
            MapPreviewCard()
        }
        items(tracks) { track ->
            TrackCard(track = track)
        }
        item {
            SectionHeader(
                title = "Current best times",
                subtitle = "Fast sample leaderboard data until telemetry storage is wired in.",
            )
        }
        items(leaderboard) { run ->
            LeaderboardCard(run = run)
        }
    }
}

@Composable
fun RecordScreen(
    innerPadding: PaddingValues,
    leaderboard: List<RunRecord>,
) {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(innerPadding)
            .padding(horizontal = 16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
        contentPadding = PaddingValues(vertical = 20.dp),
    ) {
        item {
            SectionHeader(
                title = "Record a run",
                subtitle = "GNSS and IMU capture dashboard for a future foreground recording service.",
            )
        }
        item {
            ElevatedCard(
                colors = CardDefaults.elevatedCardColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer,
                ),
            ) {
                Column(
                    modifier = Modifier.padding(20.dp),
                    verticalArrangement = Arrangement.spacedBy(16.dp),
                ) {
                    Text(
                        text = "Ready to start",
                        style = MaterialTheme.typography.headlineSmall,
                        fontWeight = FontWeight.Bold,
                    )
                    Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                        MetricPill(label = "GNSS", value = "Locked")
                        MetricPill(label = "IMU", value = "Stable")
                        MetricPill(label = "Track", value = "Akina Pass")
                    }
                    LinearProgressIndicator(
                        progress = { 0.78f },
                        modifier = Modifier.fillMaxWidth(),
                    )
                    Text(
                        text = "Satellite confidence 78%. This is where we’ll expose fix quality, drift alerts, and calibration state.",
                        style = MaterialTheme.typography.bodyMedium,
                    )
                    Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                        Button(onClick = {}) {
                            Icon(Icons.Rounded.PlayArrow, contentDescription = null)
                            Spacer(modifier = Modifier.width(8.dp))
                            Text("Start recording")
                        }
                        OutlinedButton(onClick = {}) {
                            Icon(Icons.Rounded.Sensors, contentDescription = null)
                            Spacer(modifier = Modifier.width(8.dp))
                            Text("Calibrate")
                        }
                    }
                }
            }
        }
        item {
            SectionHeader(
                title = "Telemetry goals",
                subtitle = "The data model we’ll flesh out next for timing and coaching.",
            )
        }
        item {
            Card {
                Column(
                    modifier = Modifier.padding(20.dp),
                    verticalArrangement = Arrangement.spacedBy(10.dp),
                ) {
                    Text("Per-run capture", fontWeight = FontWeight.SemiBold)
                    Text("• GNSS route points and quality metrics")
                    Text("• Accelerometer and gyroscope samples")
                    Text("• Segment splits, elevation, and speed trace")
                    Text("• Driver, car, weather, and surface notes")
                }
            }
        }
        item {
            SectionHeader(
                title = "Recent personal bests",
                subtitle = "A placeholder view for your timing history.",
            )
        }
        items(leaderboard) { run ->
            LeaderboardCard(run = run)
        }
    }
}

@Composable
fun DrivesScreen(
    innerPadding: PaddingValues,
    drivePlans: List<DrivePlan>,
) {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(innerPadding)
            .padding(horizontal = 16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
        contentPadding = PaddingValues(vertical = 20.dp),
    ) {
        item {
            SectionHeader(
                title = "Book drives",
                subtitle = "Plan friend sessions, keep attendance tidy, and subscribe to updates.",
            )
        }
        item {
            Card {
                Column(
                    modifier = Modifier.padding(20.dp),
                    verticalArrangement = Arrangement.spacedBy(12.dp),
                ) {
                    Text(
                        text = "Host a touge meetup",
                        style = MaterialTheme.typography.titleLarge,
                        fontWeight = FontWeight.Bold,
                    )
                    Text(
                        text = "Create a private or club-visible drive, attach a track, and cap attendance for safer sessions.",
                    )
                    Button(onClick = {}) {
                        Text("Create drive")
                    }
                }
            }
        }
        items(drivePlans) { plan ->
            DrivePlanCard(plan = plan)
        }
    }
}

@Composable
fun ProfileScreen(
    innerPadding: PaddingValues,
    profile: UserProfile,
) {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(innerPadding)
            .padding(horizontal = 16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
        contentPadding = PaddingValues(vertical = 20.dp),
    ) {
        item {
            ElevatedCard(
                colors = CardDefaults.elevatedCardColors(
                    containerColor = MaterialTheme.colorScheme.secondaryContainer,
                ),
            ) {
                Column(
                    modifier = Modifier.padding(20.dp),
                    verticalArrangement = Arrangement.spacedBy(10.dp),
                ) {
                    Text(
                        text = profile.displayName,
                        style = MaterialTheme.typography.headlineSmall,
                        fontWeight = FontWeight.Bold,
                    )
                    Text(text = profile.handle, color = MaterialTheme.colorScheme.primary)
                    Text(text = profile.bio)
                    Text(
                        text = "Home base: ${profile.homeRegion}",
                        style = MaterialTheme.typography.labelLarge,
                    )
                }
            }
        }
        item {
            SectionHeader(
                title = "Subscribed tracks",
                subtitle = "Roads this driver follows for updates, meetups, and leaderboards.",
            )
        }
        item {
            Card {
                FlowRow(
                    modifier = Modifier.padding(16.dp),
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                    verticalArrangement = Arrangement.spacedBy(8.dp),
                ) {
                    profile.subscribedTracks.forEach { trackName ->
                        AssistChip(
                            onClick = {},
                            label = { Text(trackName) },
                        )
                    }
                }
            }
        }
        item {
            SectionHeader(
                title = "Cars",
                subtitle = "Vehicle identities and setup notes.",
            )
        }
        items(profile.cars) { car ->
            Card {
                Column(
                    modifier = Modifier.padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(6.dp),
                ) {
                    Text(car.name, fontWeight = FontWeight.SemiBold)
                    Text(car.platform, color = MaterialTheme.colorScheme.primary)
                    Text(car.notes)
                }
            }
        }
        item {
            SectionHeader(
                title = "Best times",
                subtitle = "A lightweight first pass at the profile performance page.",
            )
        }
        items(profile.bestTimes) { run ->
            LeaderboardCard(run = run)
        }
    }
}

@Composable
private fun SectionHeader(
    title: String,
    subtitle: String,
) {
    Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
        Text(
            text = title,
            style = MaterialTheme.typography.headlineSmall,
            fontWeight = FontWeight.Bold,
        )
        Text(
            text = subtitle,
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
    }
}

@Composable
private fun MapPreviewCard() {
    Card {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(14.dp),
        ) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(180.dp)
                    .clip(RoundedCornerShape(24.dp))
                    .background(MaterialTheme.colorScheme.tertiaryContainer),
                contentAlignment = Alignment.Center,
            ) {
                Column(
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.spacedBy(10.dp),
                ) {
                    Icon(
                        imageVector = Icons.Rounded.MyLocation,
                        contentDescription = null,
                    )
                    Text("Map SDK slot")
                    Text(
                        text = "Nearby roads and live overlays will land here next.",
                        style = MaterialTheme.typography.bodySmall,
                    )
                }
            }
            Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                MetricPill(label = "Nearby", value = "3 routes")
                MetricPill(label = "Conditions", value = "Dry")
                MetricPill(label = "Safety", value = "Medium")
            }
        }
    }
}

@Composable
private fun TrackCard(track: Track) {
    ElevatedCard {
        Column(
            modifier = Modifier.padding(18.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = track.name,
                        style = MaterialTheme.typography.titleLarge,
                        fontWeight = FontWeight.Bold,
                    )
                    Text(
                        text = track.region,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                    )
                }
                Surface(
                    shape = RoundedCornerShape(999.dp),
                    color = MaterialTheme.colorScheme.primaryContainer,
                ) {
                    Text(
                        text = "${track.rating} / 5",
                        modifier = Modifier.padding(horizontal = 12.dp, vertical = 8.dp),
                    )
                }
            }

            Text(track.description)

            Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                MetricPill(label = "Distance", value = "${track.distanceKm} km away")
                MetricPill(label = "Length", value = "${track.lengthKm} km")
                MetricPill(label = "Gain", value = "${track.elevationGainM} m")
            }

            FlowRow(
                horizontalArrangement = Arrangement.spacedBy(8.dp),
                verticalArrangement = Arrangement.spacedBy(8.dp),
            ) {
                track.tags.forEach { tag ->
                    AssistChip(
                        onClick = {},
                        label = { Text(tag) },
                    )
                }
            }

            HorizontalDivider()
            Text("Best season: ${track.bestSeason}")
            Text("Hazards: ${track.hazards.joinToString()}")
        }
    }
}

@Composable
private fun LeaderboardCard(run: RunRecord) {
    Card {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            Text("${run.driverName} • ${run.carName}", fontWeight = FontWeight.SemiBold)
            Text("Best time: ${run.bestTime}", style = MaterialTheme.typography.titleMedium)
            Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                MetricPill(label = "Avg", value = "${run.averageSpeedKph} km/h")
                MetricPill(label = "GNSS", value = run.gnssQuality)
                MetricPill(label = "IMU", value = run.imuStatus)
            }
        }
    }
}

@Composable
private fun DrivePlanCard(plan: DrivePlan) {
    ElevatedCard {
        Column(
            modifier = Modifier.padding(18.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
        ) {
            Text(plan.title, style = MaterialTheme.typography.titleLarge, fontWeight = FontWeight.Bold)
            Text("${plan.trackName} • ${plan.dateLabel}")
            Text("Hosted by ${plan.host} • ${plan.visibility} visibility")
            Text("Attendees: ${plan.attendees}/${plan.capacity}")
            Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                Button(onClick = {}) {
                    Text("Join drive")
                }
                OutlinedButton(onClick = {}) {
                    Text("View details")
                }
            }
        }
    }
}

@Composable
private fun MetricPill(
    label: String,
    value: String,
) {
    Surface(
        shape = RoundedCornerShape(18.dp),
        color = MaterialTheme.colorScheme.surfaceVariant,
    ) {
        Column(
            modifier = Modifier.padding(horizontal = 12.dp, vertical = 10.dp),
            verticalArrangement = Arrangement.spacedBy(2.dp),
        ) {
            Text(
                text = label,
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
            )
            Text(
                text = value,
                style = MaterialTheme.typography.labelLarge,
                fontWeight = FontWeight.SemiBold,
            )
        }
    }
}
