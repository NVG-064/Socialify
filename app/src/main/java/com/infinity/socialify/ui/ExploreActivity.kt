package com.infinity.socialify.ui

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.GridLayoutManager
import com.infinity.socialify.MainActivity
import com.infinity.socialify.R
import com.infinity.socialify.adapter.ExploreListAdapter
import com.infinity.socialify.data.Explore
import com.infinity.socialify.databinding.ActivityExploreBinding

class ExploreActivity : AppCompatActivity() {

  private lateinit var binding: ActivityExploreBinding
  private val exploreData = ArrayList<Explore>()

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    binding = ActivityExploreBinding.inflate(layoutInflater)
    setContentView(binding.root)

    binding.skipExploreButton.setOnClickListener {
      startActivity(Intent(this, MainActivity::class.java))
      finish()
    }

    binding.exploreRecyclerView.setHasFixedSize(true)

    // Add all data to onCreate() and show the RecyclerView
    exploreData.addAll(exploreList)
    showRecyclerView()
  }

  private val exploreList: ArrayList<Explore>
    get() {
      val dataImage = resources.obtainTypedArray(R.array.data_explore_image)
      val dataTitle = resources.getStringArray(R.array.data_explore_title)

      val dataList = ArrayList<Explore>()

      for (i in dataTitle.indices) {
        val explore = Explore(
          dataImage.getResourceId(i, -1),
          dataTitle[i]
        )
        dataList.add(explore)
      }

      return dataList
    }

  private fun showRecyclerView() {
    val exploreAdapter = ExploreListAdapter(exploreData)

    binding.exploreRecyclerView.layoutManager = GridLayoutManager(this, 2)
    binding.exploreRecyclerView.adapter = exploreAdapter

    exploreAdapter.setOnClickListener(object:ExploreListAdapter.OnClickListener {
      override fun onClick(position: Int) {
        exploreData[position].active = true

        exploreAdapter.notifyDataSetChanged()
      }
    })
  }
}