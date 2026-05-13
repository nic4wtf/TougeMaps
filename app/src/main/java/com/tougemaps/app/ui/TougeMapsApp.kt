package com.tougemaps.app.ui

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.Groups
import androidx.compose.material.icons.rounded.Map
import androidx.compose.material.icons.rounded.Person
import androidx.compose.material.icons.rounded.Speed
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavDestination.Companion.hierarchy
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.tougemaps.app.data.SampleData
import com.tougemaps.app.ui.screens.DrivesScreen
import com.tougemaps.app.ui.screens.ProfileScreen
import com.tougemaps.app.ui.screens.RecordScreen
import com.tougemaps.app.ui.screens.TracksScreen

private enum class TopLevelDestination(
    val route: String,
    val label: String,
    val icon: @Composable () -> Unit,
) {
    Tracks(
        route = "tracks",
        label = "Tracks",
        icon = { Icon(Icons.Rounded.Map, contentDescription = null) },
    ),
    Record(
        route = "record",
        label = "Record",
        icon = { Icon(Icons.Rounded.Speed, contentDescription = null) },
    ),
    Drives(
        route = "drives",
        label = "Drives",
        icon = { Icon(Icons.Rounded.Groups, contentDescription = null) },
    ),
    Profile(
        route = "profile",
        label = "Profile",
        icon = { Icon(Icons.Rounded.Person, contentDescription = null) },
    ),
}

@Composable
fun TougeMapsApp() {
    val navController = rememberNavController()
    val destinations = TopLevelDestination.entries
    val backStackEntry = navController.currentBackStackEntryAsState()

    Scaffold(
        modifier = Modifier.fillMaxSize(),
        bottomBar = {
            NavigationBar {
                destinations.forEach { destination ->
                    val selected = backStackEntry.value?.destination?.hierarchy?.any {
                        it.route == destination.route
                    } == true

                    NavigationBarItem(
                        selected = selected,
                        onClick = {
                            navController.navigate(destination.route) {
                                popUpTo(navController.graph.findStartDestination().id) {
                                    saveState = true
                                }
                                launchSingleTop = true
                                restoreState = true
                            }
                        },
                        icon = destination.icon,
                        label = { Text(destination.label) },
                    )
                }
            }
        },
    ) { innerPadding ->
        TougeMapsNavHost(
            innerPadding = innerPadding,
            navController = navController,
        )
    }
}

@Composable
private fun TougeMapsNavHost(
    innerPadding: PaddingValues,
    navController: androidx.navigation.NavHostController,
) {
    NavHost(
        navController = navController,
        startDestination = TopLevelDestination.Tracks.route,
    ) {
        composable(TopLevelDestination.Tracks.route) {
            TracksScreen(
                innerPadding = innerPadding,
                tracks = SampleData.tracks,
                leaderboard = SampleData.leaderboard,
            )
        }
        composable(TopLevelDestination.Record.route) {
            RecordScreen(
                innerPadding = innerPadding,
                leaderboard = SampleData.leaderboard,
            )
        }
        composable(TopLevelDestination.Drives.route) {
            DrivesScreen(
                innerPadding = innerPadding,
                drivePlans = SampleData.drivePlans,
            )
        }
        composable(TopLevelDestination.Profile.route) {
            ProfileScreen(
                innerPadding = innerPadding,
                profile = SampleData.profile,
            )
        }
    }
}
