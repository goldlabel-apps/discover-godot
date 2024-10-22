GDPC                                                                               <   res://.import/icon.png-487276ed1e3a0c39cad0279d744ee560.stex�      h      �I�=Zt
c�`<��ɿ�   res://SaveAndLoad.gd.remap  �#      &       ;6�8`�ՎwLv�&�;   res://SaveAndLoad.gdc   `      �      ��:����u#'�՚l   res://SaveAndLoad.tscn  `      �      `�鄨E~���EQ��   res://default_env.tres        �       um�`�N��<*ỳ�8   res://icon.png  $      *      �l���v�
�'��   res://icon.png.import   0!      �      ��fe��6�B��^ U�   res://project.binary@8      	      @�A�k���I�7fq�D            GDSC          [   a     ���Ӷ���   ���޶���   �����������׶���   ���׶���   �����϶�   ��������Ӷ��   ����������¶   ���Ӷ���   ���Ӷ���   ����   ����������Ŷ   ���������׶�   ���ض���   ���򶶶�   ���¶���   ����������¶   ����Ӷ��   ��������Ӷ��   ����󶶶   ���������Ӷ�   ��������Ӷ��   ���������޶�   �����¶�   ��������Ӷ��   ��������   ���������������������Ҷ�   ���������������������Ҷ�   �����������������������Ҷ���   ��Ķ   ��������϶��   �����Ӷ�   ��������������������������Ҷ      user://data.json      player        name      Jamie         level               health     
         options       music_volume      ?   
   cheat_mode               levels_completed                        DataText                         	      
                     	      
   !      $      (      -      1      4      >      @      A      G      H      I      O      S      W      X      Y      _      h      i      s      w       y   !   z   "   �   #   �   $   �   %   �   &   �   '   �   (   �   )   �   *   �   +   �   ,   �   -   �   .   �   /   �   0   �   1   �   2   �   3   �   4   �   5   �   6   �   7   �   8   �   9   �   :   �   ;   �   <   �   =   �   >   �   ?   �   @   �   A      B     C     D     E     F     G     H     I   "  J   &  K   *  L   +  M   ,  N   2  O   3  P   <  Q   C  R   D  S   H  T   I  U   M  V   N  W   O  X   U  Y   [  Z   _  [   3YY;�  YYY;�  N�  �  VN�  �  V�  R�  �  V�  R�  �  V�  �  OR�  �  VN�  �	  V�
  R�  �  V�  �  OR�  �  VL�  R�  R�  MYOYY;�  NOYYY0�  PQV�  �  PQ�  �  PQYYY0�  PQV�  ;�  �  T�	  PQ�  �  &�  T�
  P�  QV�  �  PQ�  .�  �  �  T�  P�  R�  T�  Q�  �  ;�  �  T�  PQ�  �  �  �P  P�  Q�  �  �  �  T�  PQYYY0�  PQV�  ;�  �  �  �  �  T�	  PQ�  �  �  T�  P�  R�  T�  Q�  �  �  T�  P�Q  P�  QQ�  �  �  T�  PQYYY0�  PQV�  �  �  �  T�  P�  QYYY0�  P�  V�  QV�  �  L�  ML�  M�  YYY0�  PQV�  �  P�  QT�  �  T�?  P�  QYYY0�  PQV�  �  PQYYY0�  PQV�  �  PQ�  �  PQYYY0�  PQV�  �  ;�  �  T�	  PQ�  �  T�  P�  Q�  �  �  PQ�  �  �  PQYYY0�  PQV�  �  P�  Q�  �  PQY`      [gd_scene load_steps=2 format=2]

[ext_resource path="res://SaveAndLoad.gd" type="Script" id=1]

[node name="SaveAndLoad" type="Node"]
script = ExtResource( 1 )

[node name="CenterContainer" type="PanelContainer" parent="."]
anchor_right = 1.0
anchor_bottom = 1.0

[node name="HSplitContainer" type="HSplitContainer" parent="CenterContainer"]
margin_left = 7.0
margin_top = 7.0
margin_right = 953.0
margin_bottom = 533.0
rect_min_size = Vector2( 400, 0 )
size_flags_horizontal = 3

[node name="VBoxContainer" type="VBoxContainer" parent="CenterContainer/HSplitContainer"]
margin_right = 128.0
margin_bottom = 526.0

[node name="SaveButton" type="Button" parent="CenterContainer/HSplitContainer/VBoxContainer"]
margin_right = 128.0
margin_bottom = 64.0
rect_min_size = Vector2( 128, 64 )
text = "Save"

[node name="LoadButton" type="Button" parent="CenterContainer/HSplitContainer/VBoxContainer"]
margin_top = 68.0
margin_right = 128.0
margin_bottom = 132.0
rect_min_size = Vector2( 128, 64 )
text = "Load"

[node name="DeleteButton" type="Button" parent="CenterContainer/HSplitContainer/VBoxContainer"]
margin_top = 136.0
margin_right = 128.0
margin_bottom = 200.0
rect_min_size = Vector2( 128, 64 )
text = "Delete"

[node name="AddHealthButton" type="Button" parent="CenterContainer/HSplitContainer/VBoxContainer"]
margin_top = 204.0
margin_right = 128.0
margin_bottom = 268.0
rect_min_size = Vector2( 128, 64 )
text = "Remove Health"

[node name="DataText" type="TextEdit" parent="CenterContainer/HSplitContainer"]
margin_left = 140.0
margin_right = 946.0
margin_bottom = 526.0
size_flags_horizontal = 3
text = "This is where the data will be printed."
wrap_enabled = true

[connection signal="pressed" from="CenterContainer/HSplitContainer/VBoxContainer/SaveButton" to="." method="_on_SaveButton_pressed"]
[connection signal="pressed" from="CenterContainer/HSplitContainer/VBoxContainer/LoadButton" to="." method="_on_LoadButton_pressed"]
[connection signal="pressed" from="CenterContainer/HSplitContainer/VBoxContainer/DeleteButton" to="." method="_on_DeleteButton_pressed"]
[connection signal="pressed" from="CenterContainer/HSplitContainer/VBoxContainer/AddHealthButton" to="." method="_on_AddHealthButton_pressed"]
  [gd_resource type="Environment" load_steps=2 format=2]

[sub_resource type="ProceduralSky" id=1]

[resource]
background_mode = 2
background_sky = SubResource( 1 )
             GDST@   @            L  WEBPRIFF@  WEBPVP8L3  /?�͐P�
�����6d���5�?���m;&I��Dd۶m۶m��n�2V�m��L�VdT�ב���Wվ#�Vm۶-�\k�4a����R,&C�����!�m#H�g��/�oGrl�V�h��n9dk~�~�������%/�1nH�ry�;H�7lȉ`AKq�� �\�j �kp��	����^[��U��b�fP+�w���Ϻ�s�|�~��y��>�  �� ���3�A��즡  jq , X���8Բ >  HK�9��y���Zs�o��P  @~"��.��1Xqr8���>�2�<�w��K�Q�`��Ct:��@åĦ`-Y��� o<�f��Q��竭� � �˦����ãg���^�������<�J�xz/���6��а���ll���CO���3�q��U�&=d`�?��Ev�  g�3]\4� �8` �Y�9�0�ߠYC��M7�v�]Ͷ�6cW �8D�M	�8�7a��λ�(��;� gX@�.`,DO���ǎK�u����a�`d	64l�3l���Mά6,ߵܑܰ�-�k^^�7�㍥��Q~Y�`@
�&Pp��;�3���
î��Cv8����������g�t=F���M26���L��3c�a���9�v,����2����&�;p\�4� � ��q��u�õ� ��������ٝ�
1_�0=���Xl�;s��g��2}����K��e�ɲ��d���1{y����G���hmH��k�P@��>�=g( ��w��v��~�j��`���sp^[�����?�8����@�3 a��5��k���oh���5O�,������7�z�=���u�9�����_�;>��� �=���2��g�ny����ұ��e��|�~��}�N�e��ߟ��tv����?�&� ��7���9�����;_~���en{�9�  �wq��1hb^-Pt*NLfj3�`2�ۙo�pxx�=���^s��'���ۿ;�s�	��V��[��p��O��?{�����0�,U����l�-�,��C�  ܻs���q��I ��9�\��Yr�_��/�'uN����p��9���m?�F/�\�(1�7���@���@���`<|�����}\=|���[z�M�ݻ�B8ts><^ �а��.�
�p8��\p�bCd���Ǹ��B�݁��X@켃��d�#���۽���x�?���7�޺��@0H��.n�3���1jj\�)t?�nz����0H�I�\�C-� �����J�<���p`� ���u���n��16H���� g �L��u�Y#  /cy  V � 0�^�DOM��0H�[
��  �~��n �tb�;� ��j<~5
Fd쇍Cj�06� <i~�  ���`≅8j~��M??�Mpd�zhD �A� ��  ����ҵ���~z��#7�>�����=)�V�=�
�< X�  ^0���l=`��z�(p�A�}�M�<�;��΂#M�^Z�3�Yqf9ॆ�=  `�3|;�=>f�Ƨ��=�= Z�v;�pq�g�%7 �Y�v�\���8�߻s��������5@ ��6����1�0�PRJ��^^  K���; ���36GO��57��������������+5�A4�$` #�;v0��  ,S���  ��k��3�-�O�:����s��?��'�9l� F�RŨ&� ¡� � Xk �ߙ �������o��5q��??������  l�6�`1 ���}6� ,F�ؼ�  ��;  `�~�/�Q8�U_8�oit՗�`1"�E���@��Z�j  k+��G�  �o����AF+pa"38 y���  ��̼  00��cn�~ï�jc�`iH���:�E a  ��`q���� ���3�����{�8 �` ���E��ѣ_`�����M ؼ��U���9|�>���U�	 �a��h�]��w�x} \:�{��a  �׽>FH=8���@���yzq�� `���I�u������� X `a� �� �A"t��`���s��1  ������8���)�&� �7@�*6U��5 ���h}:B`� D4s��@� ���-�����	���k��`888���3�A31�јa ��a���E�I�`N���x� pos͇�4@,QDh�ze :{wp(q()1J:*/�m�7pos��c�>-�h�F"� ���󑟧�YCc��� 0@O��6��>�~}�	�0!b� ����=b$)@��7���������0l6�?u��@ �F��`�������1{ �F��$�����3�3�X���<x���; ��f��I׾<f/�pF��@QP@�l� 6�Ah ��!�06,�|���w&�,  �  ���x��4��L֭�Mm��M�ۮA��� ���6��a�؄��\����4y 0c��g�KhCb��K�H��� ��4h9�i�(0��|}ZrFc� T! a�UR �� E:��ϛ���MF!��@�� �FLa�qOl6�!��dV������;�H �(!JJ�)i�r �F  ���]Elb�6Ul�:C8 s��ϖoj��+ � D��t�@p�  4@# 9�N	0��;�4wR/�M�.#@`�`l0 �C�Cà%5�������˦�/�^�̀���O `Aw0���4q1�$�ID���T^�}}S�76<o�� p?u��$�!��  ���ZT��M���ҝ� ��,r���ί�A �a�f��ُ襄�%��6��� Y���J�����d�9���+����s��4�eC�4lh 6�`C��ڮ��P�6�β��x����CK�#���=x�^�#:�8��6��P��C*��;��C�@�-WԳ��<��          [remap]

importer="texture"
type="StreamTexture"
path="res://.import/icon.png-487276ed1e3a0c39cad0279d744ee560.stex"
metadata={
"vram_texture": false
}

[deps]

source_file="res://icon.png"
dest_files=[ "res://.import/icon.png-487276ed1e3a0c39cad0279d744ee560.stex" ]

[params]

compress/mode=0
compress/lossy_quality=0.7
compress/hdr_mode=0
compress/bptc_ldr=0
compress/normal_map=0
flags/repeat=0
flags/filter=true
flags/mipmaps=false
flags/anisotropic=false
flags/srgb=2
process/fix_alpha_border=true
process/premult_alpha=false
process/HDR_as_SRGB=false
process/invert_color=false
process/normal_map_invert_y=false
stream=false
size_limit=0
detect_3d=true
svg/scale=1.0
              [remap]

path="res://SaveAndLoad.gdc"
          �PNG

   IHDR   @   @   �iq�   sRGB ���   DeXIfMM *    �i            �       �       @�       @    FQB�  �IDATx�[{�U�u��� 2<�bPa�(��
�#TYF��.��jA��j��եY��LR]I����e5k��-5���	��K��o�{������~��{g ���᜽�~��=�=�^2r�u��J9~��c%'�$#}�H��D�%�i~�DQ�\}u*�L.�����1��p���g%�3'�G�l�.ӱ�����pKa_���TE�E���V���> x�Cw��-HK��}�ҿ3�ϧ���L���+_^sSDY�Z/�O�^��W����FC�tz�PMt0
�ih��4e��G�ņ�U�d>�5�pRSʐ�%P�v��絚2rxݦM�llb���'�9q2z6�h�GLH���^=ђ~K����4Ζ�6g$�:�:s����vg�7р*�9y��[M���3I�X�H�a�^���i��k�5g�r>���/j]6"lB�qq�ˉ�Ϣa�6�14#b�9w���a�L�pH� Х��V�����3���mr��ω�z�������d�Y��@�����a8������Qt�c'��>���Y������5����/�&��icmZ��kp<ŝbs�
�1M��8m��k��<���*t���K]�ؽdr��2b�ʕ�t	��<^�M�i)V��Q@8ts��6J�TK�ޜ���5;
!eF�p��%�Հ,6qH�\�q�A���h�~��5= �����i!(5pһ����i{�E�
-��k�K��ݥK�Rձ�t��A��29X_/����C����n�f9v�D��Y��tF�%�O�WWU���㵈�>�h��v���.��@��@&��:w���F�5�}]��t�����Kҧ������7�����;�ɮ}{�� 8����u�t�8�Q���&�*:P?.SU{�Q.����Ą�5���~�t�Z%w��q�)/��Yj�Y����G��k�dǮ8�:��>_7r>	��3���1���(�a�s��/I.���-�ZjP'L鿜q����d�hݺog'��r򛕯�S��Bv����Y�~��fز�^�t;n-�5g�N2g�¨aC��.��hBs�Bv�ً5�u��!9~�t8��t��A��+���٪4P��'��UuPJ擟6�Iy�/#d��u��c��Gè7
�Q�BB��Ϟ:E�η����F��p޺}����_����!��fd`�>r��o��Z���3��������!�$����V���qW�j�5�9���� &4��S^^^&�{��u^�	4>,>�X~��=y���d������ش���}��ݷ͔��j����j��2������c*J��Oׇ��e����2mZcS��F�/_�P�]wm:N��m�7���CƎ!so�*��BN`Zo��3���/cjl��o�+5�/�s{�2v��;&����r��I�����sɖU���=����Dq�gKJ�p"����r��)�?A���2M���	����[��c�LV�/^ F_Yc�֭2g�CR�بe1'�ܦx�Q#�d:��:h{�E����]~����������>��|J���#�{AmA��[?�YK�F��f�q-H7���=!׀����~={�<��T�kW��v�GH�O����8 _64H���u�,�\�5>d����)��O?�HqE6l�*��<(�|ە.9��.ԡRN'l!\C��<Soѝs�O͟��ye���lf������ˍ׍�i㯓nUU��:+�#?#߀�/�*�i�H��Q_+i�eyb�x��@�@f�ݻ���e��c��V?ǻ�P����;[�m���K��9r���^>۽��Ol�`��7`�t��˕��H���aҔ����W���^����o��R'N{��MW��o���x}��:�p�]���ϸ�"ι��~`I0�(��
�>�.�Y'��"�r�p�f����&D2��!2��#���i����K�;�=����2i:}���ҶMe�'-~�R-��n`�@��<��;�R�@�w�d8����]�6!M�)�W;�f�m񴧯��N�Ci$b�Iq4�gL�A�^�g+��:+԰SNFP,~m���a �B�����u���rS+�{t��O�Z��4y�8�^�Xd�d�`~�O��.��odB�V�/������41��I��}������[9k��s~�s�/n!�ˋ4Tw��h���8 �Ay��̜���3�k�P|�VG[�xla��Q2�Q�� &m�V���Q��2+����5/zva@�d���e��o�x����c��w��.��>��乫��Z�Ь �Is�����ݟ���^���b�Ћ`cE���<���gL�Xt�����~��.u�2t�^��w9�t�U���.�BÛ%��&��Y���ƍ����5�.W_|�q�Č3s�$yta񑟅�t�3s����{R������`Z8U����rW=e./�K�h�b`�v��%�}J㑣hĦ���!e�Ŝ�R5Q���fL*^�F��> ��4i��R�q"P|�l��'�P���椺�Kor8�W��v�ϋ����L�?`��c�
G���Z��N{->���G��h�����ጥ<B��������]@��*:�v풯���R���5`��xةt�\�r�����ݷH�s�EF����hK��Dn&���P���X��q�`�41��M0�:">�}}�}C>ٱ]�Y�.������nu� ��S���Ou�Cxbd&�n�-+�\�8�0��"�m{:PI�l
�7� #.���)� ����G�<t�l�I��̊��O͹�/�Wu���_ �i�%^�ro��g��s��z�J[Z�!�;qH�����T+�,�������x�	���:����w�ȖO>�����/{T�?0�����~L{�<��1}�̛;�Ċ��>%F�_���}�Ϙ���	*�خY�铗 Ȳ4�wM�T���0t� է���O�rpn�x��xe�jٹgO`�H��%�/�p��������dĞ.kӳ�2�@�������<u���/�$G�U��x��w���;/�I�Y�-Ć��G�a���W�ޔ��^%ڷO����F��M�3	���r'�@%AR��A���j�i�i~��!L�{{�Mx�'� MMI���s�33!�I�ڻWf�3��L�{�C@O��8�)㡙x�&�|�끔�x���6'�����f���	Ա����;w��	%\h��`�Q<!H ��ۅe0��y���ϝ^p��\���)�8���I�M�]����w��I�/D�w�*�}�^Gm�CKe������[cb1�m�MLh�r�/.�v+�"Y��C�'�-̢��
4������u�^���K��9��m�n����=���~��Fn�;�4lܲEn��@�����Ǹ��m�ԭ.ڄ+�_�/\��=!���n��9�/kݳ'�7�S�d�;�oa**���5�b�=���X�Vg��>�?�:c�<�L'd6�պ:4al�L�&�p�:| �3JG�t&��=m3.����赌3�NIM0�`�fv�T�(���y���"������qv	�Dɲd-�@�_������ə�̭�bW~%�%`
-����W{Ahc���9�1P�1餖�F^�[�c�#n�!p&���&�>[�T�(_xਬu���t� �#a����A�!���/6{u��FZ����X)E�3B[ �6�MU�����d��֩'��t=��0�1z�-�}|w��5�]cRf �8���;2������	rn=���0���F�ƈ��D��P�	��	�{�9���>H�vJ��Ǯ���GI������Z�_K���o�g���cz������|��}Wmq�6���n|N���{e^ǥa�Ћ��|��5?��o�a����+�?fGz�n�uSl�vr7UhK��b���[!����Wg�wft8z����)��˽���-�\�Xc`����rFXn����.݉/3�'2qt�%��&׬v�X�t�
S6�K����v�Wuwy��ȧ;vȝx�x��)�TJ_�h�s��ʜ3�f-޿���
�Y=ZD����ٴ}�	��E
LY��������ǎ��ؓ,z(w�r���T6����`8T,Is�������hb�#u��.�3_*�N���d��h������X�k�;���|D�0�%�>�}�a41�{L�|�Ȱ��(����Ǥ	�I�-qHSpMp���A��l6Wǵ����9�<[6��ѣ���	�����*�C�Op8�]����(�I�rwո\I�!�A�l]�Me�*(��h�g�n� }��������5I��"iM ���6�*B��4�ҬAY������D�AN��l����'[w�>j�P!^W�����(D�a]��Ӣ�O0�*q.j�ʭ)�6�>|"���r�-��܁��s��~��^�U�	(�|]�4G!�$h�1iK�؊6̀T%�-�}�^����W[��a\�&x�oY�f�_fN�ٳ�Mu�V��u�Sa�������	�:ںo�I}�Ѭxe�aڙ��N�MVJ?-OZ���z����+(u3 ��!,�tYM��Y���/0JM�VZM�]H;.ΦK�C/=V�cEz=�S���|2ɳCۻz�A� P�V�E�С}�7�>��>��_Ӷ��	,�k̊��NU�NI��������ᖉ�g�Oǂ�l]F�{_��̈�������K
*ʳ#P�j[;��Lp�5���y�j�}�C:�������*E���ьCm�+��t�$@�0��!��2��2�)��"��IԷ�q�&&�d��x��aU���3��@�O~0�!�O�z%ᜋ.�ɝ��(�Z19vT��@LР+����"&���-7wkc�f� ��p�B6+�ٸ1���btI�녣+�f�"�X�_q��>�*�q��爯�1��-H�(�`OA'��4������h������h�~��v�9�K]��Ӫ/6��5��Ӊ�NP�    IEND�B`�      ECFG      _global_script_classes             _global_script_class_icons             application/config/name      
   JsonLoader     application/run/main_scene          res://SaveAndLoad.tscn     application/config/icon         res://icon.png     display/window/size/width      �     display/window/size/height           display/window/size/test_width      �     display/window/size/test_height      8     display/window/dpi/allow_hidpi            display/window/stretch/mode         2d  $   rendering/quality/driver/driver_name         GLES2   %   rendering/vram_compression/import_etc         &   rendering/vram_compression/import_etc2          )   rendering/environment/default_environment          res://default_env.tres         