package com.infinity.socialify.data

data class LeaderboardCommunity(
  val position: Int,
  val profilePicture: Int,
  var title: String,
  var member: String,
  var rating: String,
  var category: String,
  var communityId: String
)
