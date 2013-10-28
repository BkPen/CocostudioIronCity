/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

cc.MAX_VERTEXZ_VALUE = 5000000.0;
cc.ARMATURE_MAX_CHILD = 50.0;
cc.ARMATURE_MAX_ZORDER = 100;
cc.ARMATURE_MAX_COUNT = ((cc.MAX_VERTEXZ_VALUE) / (cc.ARMATURE_MAX_CHILD) / cc.ARMATURE_MAX_ZORDER);
cc.AUTO_ADD_SPRITE_FRAME_NAME_PREFIX = false;
cc.ENABLE_PHYSICS_CHIPMUNK_DETECT = true;

cc.armatureVersion = function(){
    return "v1.0.0.0";
};

cc.RESOURCE_TYPE["TEXT"].push("ExportJson");