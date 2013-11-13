/*
   02-add-print-manager.js - Add print manager plasmoid to the systray
   Copyright (C) 2010-2012 Kevin Kofler <kevin.kofler@chello.at>
   Updated in debian by Maximilino Curia <maxy@debian.org>

   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 2 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.

   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>.

   Portions lifted from 01-kubuntu-10.04.js:
   Harald Sitter, apachelogger@ubuntu.com 2010-04-02
   Jonathan Riddell, jriddell@ubuntu.com 2010-02-18
   Copyright Canonical Ltd, may be copied under the GNU GPL 2 or later
*/

updated = false;

add_print_manager = function(widget, containment)
{
  if (updated) return;
  var max = 0;
  widget.currentConfigGroup = new Array("Applets");
  for (var i = 0; i < widget.configGroups.length; ++i) {
    var value = parseInt(widget.configGroups[i]);
    if (value > max) {
      max = value;
    }
  }
  widget.currentConfigGroup = new Array("Applets", max + 1);
  widget.writeConfig("plugin", "org.kde.printmanager");
  print("Print manager plasmoid added to the systray");
  updated = true;
}

var template = loadTemplate('org.kde.plasma-desktop.findWidgets');
template.findWidgets('systemtray', add_print_manager);

if (!updated)
  print("No systray found");

