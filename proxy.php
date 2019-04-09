<?php

$externalURL = $_POST['url'];

$externalData = file_get_contents($externalURL);

echo $externalData;