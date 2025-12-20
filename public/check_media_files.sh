#!/bin/bash

webp_files=(
"audhumla"
"baldr"
"bifrost"
"bragi"
"brisingamen"
"brokkr_sindri"
"draupnir"
"fenrir"
"freyja"
"frigg"
"ginnungagap"
"gjallarhorn"
"gleipnir"
"gungnir"
"heimdall"
"hel"
"helheim"
"hofund"
"hrimthurs"
"huginnmuninn"
"idunn"
"jormungandr"
"loki"
"mjollnir"
"njord"
"odin"
"sif"
"skadi"
"sleipnir"
"svadilfari"
"thor"
"thrym"
"tyr"
"yggdrasil"
"ymir"
)

for webp_file in "${webp_files[@]}"; do
  base_name=$(basename "$webp_file" .webp)

  # Check for mp3
  if [ ! -f "music/${base_name}.mp3" ]; then
    echo "Missing music/${base_name}.mp3"
  fi

  # Check for videos
  if [ ! -f "video/${base_name}_chibi.mp4" ]; then
    echo "Missing video/${base_name}_chibi.mp4"
  fi
  if [ ! -f "video/${base_name}_epic.mp4" ]; then
    echo "Missing video/${base_name}_epic.mp4"
  fi
  if [ ! -f "video/${base_name}_premium.mp4" ]; then
    echo "Missing video/${base_name}_premium.mp4"
  fi
done
