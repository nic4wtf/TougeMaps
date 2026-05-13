package com.tougemaps.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import com.tougemaps.app.ui.TougeMapsApp
import com.tougemaps.app.ui.theme.TougeMapsTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            TougeMapsTheme {
                TougeMapsApp()
            }
        }
    }
}
