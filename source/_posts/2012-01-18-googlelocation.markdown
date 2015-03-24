---
layout: post
title: Google查询地理信息API
categories: [能工巧匠集]
tags: []
published: true
comments: true
---
向Google Map查询给定经纬度的位置信息，返回为JSON

```
+ (NSString *)googleReverseStringWithCoordinate:(CLLocationCoordinate2D)coordinate {
    return [NSString stringWithFormat:@"http://maps.google.com/maps/geo?q=%lf,%lf&output=json&sensor=false&accuracy=4", coordinate.latitude,coordinate.longitude];
}
```
