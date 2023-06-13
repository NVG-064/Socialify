package com.infinity.socialify

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import com.google.firebase.auth.FirebaseAuth
import com.infinity.socialify.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private lateinit var auth: FirebaseAuth

//    private lateinit var myNewTextView: TextView
//    private lateinit var customMyTextView: TextView

    @SuppressLint("MissingInflatedId")
    override fun onCreate(savedInstanceState: Bundle?) {
        binding = ActivityMainBinding.inflate(layoutInflater)
        super.onCreate(savedInstanceState)
        setContentView(binding.root)

        auth = FirebaseAuth.getInstance()

        binding.signOutMaterialButton.setOnClickListener {
            Toast.makeText(this, "Signing out ${auth.currentUser!!.email.toString()}", Toast.LENGTH_SHORT).show()
            startActivity(Intent(this, SignInActivity::class.java))
        }

//        myNewTextView = findViewById(R.id.myNewTextView)
//        customMyTextView = findViewById(R.id.customMyTextView)
//
//        val email = intent.getStringExtra("email")
//        val displayName = intent.getStringExtra("name")
//
//        myNewTextView.text = email
//        customMyTextView.text = displayName
    }
}