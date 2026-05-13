package com.tougemaps.app.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable

private val LightColors = lightColorScheme(
    primary = TougeGreen,
    secondary = TougeClay,
    tertiary = TougeSand,
    background = TougeMist,
    surface = androidx.compose.ui.graphics.Color.White,
)

private val DarkColors = darkColorScheme(
    primary = TougeMist,
    secondary = TougeSand,
    tertiary = TougeClay,
    background = TougeCharcoal,
    surface = androidx.compose.ui.graphics.Color(0xFF222824),
)

@Composable
fun TougeMapsTheme(
    content: @Composable () -> Unit,
) {
    MaterialTheme(
        colorScheme = LightColors,
        typography = AppTypography,
        content = content,
    )
}
